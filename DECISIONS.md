# Decisions Log

1. Controller based API vs Minimal API
Minimal APIs require less boilerplate code and offer a modern approach with
easier unit and integration testing
**Decision:** Minimal APIs

2. Postgres Database vs MongoDB
I had originally thought about using Postgres, however thinking further there
isn't really any relationships between data they are just individual entries
of tasks at this time so I think currently using MongoDB makes sense
