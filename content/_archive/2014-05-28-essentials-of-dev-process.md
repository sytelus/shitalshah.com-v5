---
title: Essentials of Development Processes
author: Shital Shah
type: post
date: 1970-01-01T00:00:00+00:00
draft: true
url: /?p=1403
tags:
  - Uncategorized

---
#### Generalists with specializations

Create teams that are� predominantly full-stack developers. You want individuals to own features, be able to work in all parts of the stack and have a culture of doing all the changes required to ship X� as opposed to� own implementation of part of feature in a stack. Team members can� be specialists in an area but everybody needs to own feature, not a portion of stack. A developer should include specialists for the specific portions of stack in code reviews. Creating teams of specialists who only want to work in UX or databases creates a politics of responsibility, relieves teams to do only their part and blame others for not doing theirs, creates priority disorder/blockage as UX team wants to ship feature X but not interested in shipping Y, lessens visibility of dependencies that impacts each other.

#### You have one metric and that's A/B testing

It's not unusual for a dysfunctional team to proliferate all kind of metrics, dashboard full of numbers that often tell conflicting stories and metrics that are many times artificial or only an indirect proxy for user experience. It encourages teams to invent metrics that� shines for task at hand instead of actual difference in product quality. The one an only true metrics is A/B testing which should� measure impact on individual's work.

#### Be able to run and debug your product end-to-end on developer box

You must be able to set up your development environment without seeking assistance from other team members ("Friday 2 AM Test").� Developers should be able to build� the source and run your entire product end-to-end from database to UX layers on their individual box and be able to set breakpoints in different parts of stack. There should be clear way to look at logs and detailed error messages without seeking assistance.

#### Independent Feature Flighting

Developer should be able to work on a feature and publish it. There should be easy way to flight this feature independently and measure impact on A/B test.