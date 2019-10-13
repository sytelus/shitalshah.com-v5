---
title: A Day in SQL Tuning
author: Shital Shah
type: post
draft: true
date: 2010-01-27T09:11:27+00:00
url: /p/a-day-in-sql-tuning/
dsq_thread_id:
  - 2670071072
categories:
  - Developers

---
Today I got in to some heavy weight TSQL tuning. This time the target was a legendary sproc that was taking 3 mins and now I’m about to call it a day when this giant SP is eating only 16 sec. Not excellent but not bad at this point. Here are some notes…

  * Apparently resetting identity using DBCC CHECKIDENT can be expensive operation if you are also deleting all items from the table. One way to reduce time is use TRUNCATE TABLE before DBCC CHECKIDENT.
  * I prefer table variables instead of temp tables but one place temp tables are required is if you have lots of data in them and want index!
  * Data Tuning Wizard would come out with zero suggestions on many occasions but it does not mean there are no significant optimizations possible. The best way to “guess” possible index is to have index for all columns used in join _and_ use INCLUDE clause that has columns accessed in SELECT. This last thing does attracts even the least interested query plans to use the index :).
  * If you have temp tables, it’s usually better to create index after you have inserted data instead of before.
  * If you have complex sproc, SQL Server Profiler will spit out thousands of trace lines during the run. A quick way to pin point the SQL statements needing performance tuning is to use File > Save As to put the trace results in to a table. You can use then following query that immediately surfaces culprits. Notice that statements which run in WHILE loop might take less time individually but collectively their duration sum may be higher. Below query would reveal this culprits immediately. <pre class="code-block"><code>    select SUBSTRING(TextData, 1, 4000), SUM(duration), COUNT(1)
    from [SavedTrace]
    group by SUBSTRING(TextData, 1, 4000)
    order by 2 desc&lt;/li>
  </code></pre></ul> 
    
    One of the big performance hits occur when you must process individual rows one at a time instead of in set. For instance, let’s say you have a table with a column that has comma delimited values. Now you want to split these values in each cell and create a new table which would have N rows for each row in original table – one for each spitted value. The Internet is littered with dozen ways to split strings in TSQL, some even uses CTEs (not a good idea because there are lots of gotchas like max recursion limit). So far the best way is to use SQL CLR with code like below. Its as fast as any native TSQL juggling, if not faster. However most important thing here is not SQL CLR but how you use this table valued function and here’s the secret: The best bang for the performance you would get is using CROSS APPLY (or OUTER APPLY) with table valued UDF.
    
    <pre class="code-block"><code>    public partial class UtilityFunctions
    {
        [Microsoft.SqlServer.Server.SqlFunction(FillRowMethodName = &lt;span class="c10">"FillRow", TableDefinition=&lt;span class="c10">"StringPart nvarchar(max)", 
            IsDeterministic=true, IsPrecise=true, SystemDataAccess=SystemDataAccessKind.None)]
        public static IEnumerable ClrSplitString(SqlString sqlStringToSplit, SqlChars delimiter, SqlBoolean removeEmptyEntries)
        {
            if (!string.IsNullOrEmpty(sqlStringToSplit.Value))
            {
                return sqlStringToSplit.Value.Split(delimiter.Value
                    , (StringSplitOptions)(removeEmptyEntries ?
                            StringSplitOptions.RemoveEmptyEntries : StringSplitOptions.None));
            }
            else
            {
                return null;
            }
        }

        public static void FillRow(object obj, out SqlString splittedString)
        {
            if (obj != null)
                splittedString = new SqlString((string)obj);
            else
                splittedString = SqlString.Null;
        }
    }
</code></pre>