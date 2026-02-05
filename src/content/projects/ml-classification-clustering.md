---
title: "Sales & Economic Impact Analysis"
date: 2024-04-01
tags: ["Data Science", "Applied Analytics", "Geospatial Analysis"]
stack: ["Python", "pandas", "NumPy", "scikit-learn", "Geospatial mapping", "Regression analysis"]
heroImage: "/images/projects/ml-classification.webm"
summary: "Applied data science project analyzing real sales and estimate data from a construction business to understand geographic demand patterns and evaluate macroeconomic impacts on sales performance."
featured: false
order: 5
---

## Overview

An applied data science project analyzing real sales and estimate data from a construction business to understand geographic demand patterns and evaluate whether macroeconomic conditions contributed to a downturn in sales.

The project involved end-to-end data ownership: sourcing raw business data, cleaning and transforming it, enriching it with geospatial and economic data, and applying statistical and machine learning techniques to explore potential drivers of sales performance.

## Data Acquisition & Preparation

- Obtained raw sales and estimate data directly from business records
- Cleaned and normalized inconsistent real-world data (missing values, formatting issues, incomplete addresses)
- Converted customer addresses into latitude and longitude coordinates for spatial analysis
- Structured datasets to support geographic, temporal, and economic comparisons

## Geospatial Analysis

- Visualized sales and estimate activity using latitude/longitude mappings
- Explored geographic patterns in sales volume and conversion rates
- Identified regions with higher concentrations of successful sales versus lost estimates

## Economic Analysis

- Integrated macroeconomic indicators to investigate external influences on sales performance
- Applied LASSO regression to analyze relationships between economic variables and observed sales declines
- Evaluated whether broader economic conditions aligned with changes in customer conversion behavior

## Exploratory Machine Learning

- Applied K-Means clustering to explore geographic groupings within the sales data
- Used clustering results as an exploratory tool to visualize regional structure rather than as a final predictive model
- Treated clustering as a hypothesis-generation step to guide further analysis

## Key Takeaways

- Demonstrated how messy, real business data can be transformed into structured analytical datasets
- Showed how geospatial visualization can reveal regional demand patterns not visible in raw tables
- Explored the role of macroeconomic indicators in business performance using regularized regression
- Highlighted the difference between exploratory machine learning and production modeling
