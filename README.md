# ai-scan-demo

A tiny TypeScript + Express API with **intentional** security issues, used to test
AI Scan Review. Do not deploy it.

| Issue | Where | Expected |
|---|---|---|
| SQL injection | `src/routes/users.ts` | Reachable from `GET /users/search` |
| Hard-coded JWT secret | `src/routes/auth.ts` | Secret, used by `POST /auth/login` |
| Command injection | `scripts/cleanup.ts` | Not reachable (never imported) |
| `lodash@4.17.20` (direct) | `_.template` in `src/routes/reports.ts` | Reachable |
| `node-fetch@2.6.0` (direct) | never imported | Not reachable |
| `minimist@0.0.10` (indirect via `optimist`) | `optimist` never imported | Not reachable |
| `minimatch@3.0.4` (dev dependency) | never imported, dev only | Not shipped to production |
