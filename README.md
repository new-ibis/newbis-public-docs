# NewBIS Public Documentation (VitePress)

This repository contains the source code and Markdown files for the official public documentation of the **NewBIS** platform. The documentation is compiled statically using VitePress and deployed automatically to GitHub Pages.

Designed with a focus on sales, marketing, and onboarding, this documentation showcases the key modules, vertical industry solutions, and capabilities of NewBIS, along with a searchable Glossary of Terms.

---

## 🛠️ Local Development

### 1. Install Dependencies
Before running the documentation locally, install the required packages:
```bash
npm install
```

### 2. Run the Development Server
To start the hot-reloading development server:
```bash
npm run docs:dev
```
The local server will be accessible at `http://localhost:5173/newbis-public-docs/`.

### 3. Build & Preview
To compile the static production bundle and preview it locally:
```bash
npm run docs:build
npm run docs:preview
```

---

## 📂 Project Structure

* **`content/`**: Holds the structured user guides and marketing materials:
  * `nachalo.md` – Main welcome and landing overview page.
  * `za-nas.md` – Information about the NewBIS Group team and approach.
  * `logistichni-moduli/` – Detailed overview of the core logistics modules (Sales, Deliveries, Warehouse).
  * `industrii/` – Customized vertical solution guides for specific sectors (Automotive, Furniture, Food & Beverage, Finance, Apparel, Machinery, Business Services, Transport & Forwarding).
  * `pravna-informaciq/` – Legal documents including Privacy Policy and Terms of Use.
  * `app-builder.md` – Capabilities and features of the integrated low-code App Builder environment.
  * `resheniya.md` – Overview of general business solutions.
* **`dictionary/`**: Houses 40 curated business and ERP glossary definitions, with an alphabetical index at `dictionary/index.md`.
* **`.vitepress/`**: VitePress configuration folder:
  * `config.mjs` – Sidebar configurations, search translations, favicon configuration, and general header theme setup.
* **`public/`**: Static public assets (brand logos, favicon icon, etc.) resolved by VitePress.

---

## 🔒 Access & Branch Protection Policies

To maintain the integrity and security of the public documentation, this repository implements strict contribution rules:

### 1. Access Control
* **Read Access**: The repository and its documentation are public.
* **Write Access**: Restricted. Only members of the **NewBIS Organization** (`new-ibis`) are authorized to push changes or merge Pull Requests.

### 2. Branch Protection Rules on `main`
* **Direct Pushes Blocked**: Direct pushing to the `main` branch is disabled for all users (including administrators). All changes must be proposed via a branch.
* **Pull Request Workflow**:
  1. Create a development branch from `main` (e.g., `feature/add-module-guide` or `fix/broken-link`).
  2. Implement changes, verify locally, and commit.
  3. Push the branch to GitHub and create a **Pull Request (PR)** targeting `main`.
* **Required Build Checks**: Every PR triggers an automated build workflow (`npm run docs:build`). The PR cannot be merged unless the build succeeds without compilation errors.
* **Required Approvals**: Every PR requires at least **1 approval review** from a NewBIS organization member before it can be merged.

---

## 🚀 Deployment

Deployment is 100% automated via GitHub Actions:
* **Workflow**: Every push or merge to the `main` branch triggers the GitHub Action pipeline defined in `.github/workflows/deploy.yml`.
* **GitHub Pages**: The pipeline automatically compiles the static HTML pages and deploys them.
* **Hosting URL**: The live site is hosted at **[https://new-ibis.github.io/newbis-public-docs/](https://new-ibis.github.io/newbis-public-docs/)**.