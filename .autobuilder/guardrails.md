# Autobuilder Guardrails

## Product Truth

CloudCastle is a premium automated retail infrastructure and operator command layer for controlled venue machine networks. It is not a generic vending website and not a generic SaaS dashboard.

## Public Positioning

Describe CloudCastle as premium automated retail infrastructure, operator visibility, machine-network command, launch intelligence, and venue/network scalability.

## Do Not Expose

- Internal Autobuilder automation details
- Secret keys or env values
- Private founder information
- Unverified compliance claims
- Anything that looks like regulated product sales instructions

## Do Not Delete

- src/
- public assets used by code
- package.json
- pnpm-lock.yaml
- .env.example
- .env.local
- README.md
- RECOVERY_NOTES.md
- AUTOBUILDER_FOUNDATION.json
- .autobuilder/
- .gitignore
- important route files

## Do Not Drift Toward

- Generic SaaS template
- Cheap vending-machine brochure
- Noaerth clone
- unrelated startup concepts
- ecommerce checkout
- public operational compliance workflow
- npm-based workflow

## Safe Improvements

- Premium visual polish
- Better copy clarity
- Responsive design fixes
- Dashboard mock-data clarity
- SEO metadata
- Accessibility improvements
- Disk cleanup after build validation
- Documentation updates

## Risky Improvements

- Removing existing routes
- Changing package manager
- Adding heavy dependencies
- Adding auth/database before needed
- Automatic Vercel deploy
- Automatic GitHub push
- Regulated product sales flows

## Build Rules

Use pnpm only.
Run pnpm build after source changes.
Do not use npm.
Do not deploy automatically.
Do not push automatically.
Prepare for manual vercel --prod only.
