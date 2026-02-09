---
title: "Paarth — Custom CRM, Admin Dashboard, and Business AI Assistant"
date: 2024-01-01
tags: ["Full-Stack", "CRM", "Business Tools", "AI Assistant"]
stack: ["JavaScript", "Node.js", "React", "MongoDB", "REST APIs"]
heroImage: "/images/projects/paarth.webm"
thumbnailImage: "/images/projects/paarth.png"
summary: "Custom internal CRM and automation platform built for small construction and fabrication businesses, with an integrated AI assistant trained on real operational data. Actively used in production to replace spreadsheets, fragmented tools, and manual workflows."
featured: true
order: 1
---

## Overview

Paarth is a full-stack web application I designed and built from scratch as a custom CRM and internal operations platform for small construction and fabrication businesses. The system is actively used in real business operations, replacing manual spreadsheets and disconnected tools with a unified, purpose-built solution.

The platform is designed around real workflows gathered directly from daily operations. In addition to core CRM and admin functionality, Paarth is being extended with a domain-specific AI assistant trained on the business's own data, enabling faster access to information, operational insights, and workflow support.

## Key Features

- **Custom CRM System**
  Designed and implemented tailored workflows for construction and fabrication businesses, including customer management, job tracking, invoicing, and internal coordination.

- **Role-Based Dashboards**
  Built separate React interfaces for administrators and employees with permission-based access control and data visibility.

- **REST API Backend**
  Designed and implemented a Node.js backend with MongoDB, exposing REST APIs for customers, jobs, invoices, and operational workflows.

- **Business AI Assistant**
  Developing an internal chatbot trained on real business data, including jobs, customers, and operational records, to support internal queries, workflow assistance, and operational insight generation.

- **Payment Processing**
  Integrated payment gateway APIs for invoice processing and transaction handling.

- **Data Integration & Automation**
  Built data ingestion pipelines and automated workflows to reduce manual data entry and streamline day-to-day operations.

## Technical Implementation

I designed and built the entire system architecture from the ground up. The backend uses Node.js and Express to provide REST APIs for all core business functions, with MongoDB enabling flexible data modeling as workflows evolved. The React frontend implements role-based dashboards that dynamically adapt to user permissions, ensuring employees see only relevant information while administrators retain full system access.

The AI assistant is designed to operate on real, structured business data rather than generic prompts, with a focus on accuracy, relevance, and internal usability. Because the system handles live operational data, particular care was taken around data integrity, access control, and user experience.

## Impact

Paarth transformed the business from manual spreadsheet tracking into an integrated internal platform that manages customers, jobs, invoices, and workflows in one place. The system is actively used in production and supports real operational decisions on a daily basis.

By consolidating tools and automating repetitive processes, the platform reduced manual errors, improved visibility across operations, and created a foundation for intelligent, data-driven assistance through the embedded AI system.

## Challenges & Solutions

- **Business Process Mapping**
  Analyzed existing workflows and designed the system to match real operational processes rather than forcing the business to adapt to generic software.

- **Schema Flexibility**
  Chose MongoDB to support evolving requirements and iterative development without disruptive migrations.

- **User Adoption**
  Designed intuitive interfaces with role-based views to minimize training and reduce cognitive load for non-technical users.

- **Data Migration**
  Migrated legacy spreadsheets and fragmented records into a unified data model with validation and consistency checks.
