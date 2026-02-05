---
title: "Transformer-Based NLP on Energy & Gas News"
date: 2024-03-01
tags: ["Machine Learning", "NLP", "PyTorch", "LLM Fine-Tuning", "RAG"]
stack: ["Python", "PyTorch", "pandas", "scikit-learn", "NLP", "Transformers", "LLM Fine-Tuning", "RAG"]
heroImage: "/images/projects/transformer.png"
summary: "Applied NLP project using Energy & Gas news articles to explore transformer-based techniques, including sentiment classification, summarization, parameter-efficient fine-tuning, and RAG."
featured: false
order: 4
---

## Overview

An applied NLP project using **Energy & Gas news articles** to explore modern transformer-based techniques, including **sentiment classification, summarization, parameter-efficient fine-tuning, and Retrieval-Augmented Generation (RAG)**. The focus was on building and evaluating NLP systems end-to-end while understanding their practical limitations on real, domain-specific text data.

## Key Contributions

- Built **transformer-based models in PyTorch**, including encoder-only and encoder–decoder architectures, to analyze energy and gas news articles
- Applied **parameter-efficient fine-tuning (LoRA, adapters, prefix-tuning)** to adapt a pretrained language model to domain-specific text
- Implemented a **Retrieval-Augmented Generation (RAG)** pipeline to ground model responses using retrieved news content
- Designed preprocessing pipelines for noisy, real-world news data using **pandas and scikit-learn**
- Evaluated model outputs qualitatively and quantitatively, analyzing where fine-tuning and retrieval improved or failed to improve results

## Technical Implementation

- Implemented and trained transformer models using **PyTorch**, focusing on attention mechanisms, sequence modeling, and training stability
- Used **Skip-gram embeddings** and tokenized text representations for downstream NLP tasks
- Built semantic retrieval using vector similarity to support RAG-based generation
- Compared extractive and abstractive summarization approaches on energy-related news articles
- Analyzed trade-offs between **fine-tuning vs. retrieval-based approaches** under limited data constraints

## Results & Observations

- Transformer-based classifiers captured sequence-level patterns better than embedding-only approaches
- Extractive summarization was more reliable than abstractive summarization given limited training data
- Parameter-efficient fine-tuning enabled domain adaptation with minimal computational cost
- RAG improved transparency and grounding but depended heavily on retrieval quality
