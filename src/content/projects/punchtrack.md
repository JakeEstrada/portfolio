---
title: "PunchTrack — Time & Activity Tracking System"
date: 2024-02-01
tags: ["Web Application", "Hardware Integration", "Time Tracking"]
stack: ["Python", "Flask", "PostgreSQL", "JavaScript", "Raspberry Pi", "Arduino"]
heroImage: "/images/projects/punchtrack.svg"
summary: "Time-tracking system for employees to clock in/out and log receipts and mileage. Started as a Raspberry Pi prototype, later redesigned as a scalable web application."
featured: true
order: 2
---

## Overview

PunchTrack is a time and activity tracking system I built to help businesses manage employee time, receipts, and mileage. The project started as a hardware prototype on Raspberry Pi and evolved into a full web application with a focus on clean schema design and auditability.

## Evolution

The project began as a prototype running on Raspberry Pi, demonstrating the concept with hardware integration. As the system proved valuable, I redesigned it as a web application, migrating the backend from SQLite to PostgreSQL for better scalability and reliability.

## Key Features

- **Time Tracking**: Employees can clock in/out with detailed activity logs
- **Receipt Management**: Digital receipt logging and tracking
- **Mileage Tracking**: Automated mileage logging for expense management
- **Audit Trail**: Clean schema design ensures all records are auditable
- **Hardware Integration**: Planned biometric and RFID authentication using adapter-based architecture

## Technical Architecture

The system uses an adapter-based architecture, allowing for future hardware integrations like biometric scanners and RFID readers. The PostgreSQL database was designed with auditability in mind, ensuring all time and activity records can be traced and verified.

## Future Enhancements

The system is designed to support biometric and RFID authentication, with the adapter pattern making it easy to add new authentication methods without changing core business logic.

