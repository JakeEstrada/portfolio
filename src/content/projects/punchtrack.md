---
title: "PunchTrack — Time & Activity Tracking System"
date: 2024-02-01
tags: ["Web Application", "Hardware Integration", "Time Tracking"]
stack: ["Python", "Flask", "PostgreSQL", "JavaScript", "Raspberry Pi", "RFID"]
heroImage: "/images/projects/punchtrack.png"
summary: "Time-tracking system for employees to clock in/out and log receipts and mileage. Started as a Raspberry Pi prototype with RFID authentication, later redesigned as a scalable web application."
featured: true
order: 2
---

## Overview

PunchTrack is a time and activity tracking system built to manage employee clock-ins, receipts, and mileage with a strong emphasis on **data integrity and auditability**. The project began as a **Raspberry Pi–based prototype using RFID authentication** and later evolved into a web application to support scalability and centralized management.

## Project Evolution

- Implemented an initial prototype on **Raspberry Pi** with **RFID-based employee authentication**
- Validated core workflows for clock-in/clock-out and activity logging
- Redesigned the system as a **web application** to support multiple users and persistent records
- Migrated the backend from **SQLite to PostgreSQL** to improve reliability, relational integrity, and auditing support
- Planned future migration to **NVIDIA Jetson Orin Nano** to support more advanced edge capabilities

## Core Features

- **RFID Time Tracking:** Employees clock in and out using RFID credentials
- **Receipt Management:** Digital receipt logging tied to employee activity
- **Mileage Tracking:** Per-entry mileage records for expense tracking
- **Audit Trail:** Database schema ensures all time and activity records are traceable and verifiable
- **Extensible Authentication:** Adapter-based architecture isolates RFID hardware logic from core business logic

## Technical Architecture

- Backend built with **Python and Flask**, exposing APIs for time, receipt, and mileage records
- **PostgreSQL schema** designed to preserve historical accuracy and prevent destructive updates
- RFID authentication handled at the edge (Raspberry Pi), decoupled from application logic
- Architecture intentionally designed to allow future hardware migration without schema or API changes

## Design Challenges & Solutions

- **Hardware Constraints:** Designed around Raspberry Pi limitations while keeping the system extensible
- **Auditability:** Modeled schemas to favor immutable records and explicit state transitions
- **System Evolution:** Ensured hardware changes (e.g., Jetson Orin Nano) would not affect core business logic
