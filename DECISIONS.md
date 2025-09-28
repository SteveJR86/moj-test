# Decisions Log

1. Controller based API vs Minimal API
Minimal APIs require less boilerplate code and offer a modern approach with
easier unit and integration testing

**Decision:** Minimal APIs

2. Postgres Database vs MongoDB
I had originally thought about using Postgres, however thinking further there
isn't really any relationships between data they are just individual entries
of tasks at this time so I think currently using MongoDB makes sense

**Decision:** MongoDB

3. PATCH or PUT request
I had considered using PATCH for the updates, however since for MongoDB the entire
record must be returned then I think PUT is more applicable. A future development
could be to look at changing it to a PATCH request where the frontend returns
only what needs to be updated in cases where access control is implemented and
certain users can only update certain fields.

**Decision:** PUT request
