---
title: "Paarth — Custom CRM & Admin Dashboard"
date: 2024-01-01
tags: ["Full-Stack", "CRM", "Business Tools"]
stack: ["JavaScript", "Node.js", "React", "MongoDB", "REST APIs"]
heroImage: "/images/projects/paarth.webm"
thumbnailImage: "/images/projects/paarth.png"
summary: "Custom CRM system tailored for small construction and fabrication businesses. Actively used in real business operations to replace manual spreadsheets and fragmented tools."
featured: true
order: 1
---

## Overview

Paarth is a full-stack web application I designed and built from scratch as a custom CRM system specifically tailored for small construction and fabrication businesses. The system is **actively used in real business operations**, replacing manual spreadsheets and fragmented tools with a unified, purpose-built solution. Built under real business constraints with requirements gathered directly from daily operations.

## Key Features

- **Custom CRM System**: Designed and implemented tailored workflows for construction and fabrication businesses, including customer management, job tracking, and invoice generation
- **Role-Based Dashboards**: Built separate React interfaces for admin and employees with permission-based access control
- **REST API Backend**: Designed and implemented Node.js backend with MongoDB, exposing REST APIs for customers, jobs, invoices, and business workflows
- **Payment Processing**: Integrated payment gateway APIs for invoice processing and transaction handling
- **Data Integration**: Built data ingestion pipelines to import and sync external business data
- **Business Process Automation**: Implemented automated workflows to reduce manual data entry and streamline operations

## Technical Implementation

Designed and built the entire system architecture from the ground up. The backend uses Node.js and Express, providing REST APIs for all core business functions with MongoDB for flexible data modeling. The React frontend implements role-based dashboards that dynamically adapt to user permissions, ensuring employees see only relevant data while admins have full system access. The system handles real business data and workflows, requiring careful attention to data integrity and user experience.

## Impact

This system transformed how the business operates, moving from manual spreadsheet tracking to an integrated platform that handles customers, jobs, invoices, and workflows in one place. The system is **actively used in production**, demonstrating real-world value and reliability. It eliminated the need for multiple disconnected tools and reduced manual data entry errors.

## Challenges & Solutions

- **Business Process Mapping**: Analyzed existing workflows and designed the system to match business processes rather than forcing the business to adapt to software constraints
- **Schema Flexibility**: Chose MongoDB for flexible schema evolution as business needs changed, allowing iterative development without migrations
- **User Adoption**: Designed intuitive interfaces requiring minimal training, with role-based views that surface only relevant information to each user type
- **Data Migration**: Handled migration from legacy spreadsheets and fragmented systems into a unified database structure
