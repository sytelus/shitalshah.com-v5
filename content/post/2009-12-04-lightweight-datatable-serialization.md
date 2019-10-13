---
title: Lightweight DataTable Serialization
author: Shital Shah
type: post
date: 2009-12-04T16:32:07+00:00
url: /p/lightweight-datatable-serialization/
dsq_thread_id:
  - 4684601942
categories:
  - Developers

---
We all know untyped data structures like DataTable and DataSet should not be passed around but sometimes - just sometimes - you got to do it because it makes sense and because it’s the most cost effective way to meet your goals. However passing things like DataTable over WCF can kill performance because of huge serialization overhead in both space and time.

So if you really had to go ahead with this crazy idea of sending DataTable over WCF then here’s the somewhat more efficient serialization technique you can use. The basic idea is to use binary serialization of DataTable and pass that serialized data as byte array along with the schema information so the client can reconstruct it on other end. It’s needless to say that doing this would invariably restrict your WCF clients to .Net so you might also want to include other web method for other clients.

<pre class="code-block"><code>public static void LightWeightSerialize(DataTable myDataTable, out byte[] serializedTableData, out string tableSchema)
{
    //Get all row values as jagged object array
    object[][] tableItems = new object[myDataTable.Rows.Count][];
    for (int rowIndex = 0; rowIndex &lt; myDataTable.Rows.Count; rowIndex++)
    tableItems[rowIndex] = myDataTable.Rows[rowIndex].ItemArray;

    //binary serialize jagged object array
    BinaryFormatter serializationFormatter = new BinaryFormatter();
    MemoryStream buffer = new MemoryStream();
    serializationFormatter.Serialize(buffer, tableItems);
    serializedTableData = buffer.ToArray();


    //Get table schema
    StringBuilder tableSchemaBuilder = new StringBuilder();
    myDataTable.WriteXmlSchema(new StringWriter(tableSchemaBuilder));
    tableSchema = tableSchemaBuilder.ToString();
}
</code></pre>

And here’s the deserializer to go with it:

<pre class="code-block"><code>public static DataTable LightWeightDeserialize(byte[] serializedTableData, string tableSchema)
{
    DataTable table = new DataTable();
    table.ReadXmlSchema(new StringReader(tableSchema));

    BinaryFormatter serializationFormatter = new BinaryFormatter();
    MemoryStream buffer = new MemoryStream(serializedTableData);
    object[][] itemArrayForRows = (object[][]) serializationFormatter.Deserialize(buffer);

    table.MinimumCapacity = itemArrayForRows.Length;
    table.BeginLoadData();
    for (int rowIndex = 0; rowIndex &lt; itemArrayForRows.Length; rowIndex++)
    table.Rows.Add(itemArrayForRows[rowIndex]);
    table.EndLoadData();

    return table;
}
</code></pre>

How efficient is this? It really depends on your data. For instance, with some of my test data with 10K rows I could get about 6X smaller payload size and 30% faster serialization. But as number of rows increases, the speed advantage diminishes compared to built-in XML serializer that you can access via ReadXml/WriteXml. For example, for a million row, above method still gives me 4X smaller payload but serialization is actually 3X slower than built-in XML serializer. So experiment before you go either way!