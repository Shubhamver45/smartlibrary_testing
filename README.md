# 📚 SmartLibrary — Automation Testing Demo

A **tiny full-stack web app** built for showcasing **automation testing skills** with
Playwright (UI), Pytest (API), and GitHub Actions (CI/CD).

## 🚀 Features

* **Backend:** Node.js + Express REST API
* **Frontend:** Static HTML + JS (simple Smart Library UI)
* **Automation:**

  * Pytest + Requests → API tests
  * Playwright → End-to-End UI tests
* **CI/CD:** GitHub Actions running API + UI tests on every push
* **Test Reset Endpoint:** Ensures clean DB state for repeatable tests

## 🖥️ Run Locally

### 1. Start server

```bash
cd server
npm install
npm start
```

### 2. Run API tests (Pytest)

```bash
# create venv (Windows)
python -m venv .venv
.\.venv\Scripts\Activate.ps1

pip install -r requirements.txt

# run tests
pytest tests/pytest -q
```

---

### 3. Run UI tests (Playwright)

```bash
cd tests/playwright
npm install
npx playwright install

# run headless
npx playwright test

# run with browser visible
npx playwright test --headed
```

---

## ⚙️ Continuous Integration (CI/CD)

* Configured via **GitHub Actions** (`.github/workflows/ci.yml`)
* Runs:

  * Starts the Express server
  * Executes Pytest API tests
  * Executes Playwright UI tests

