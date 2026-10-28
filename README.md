# Turo's portfolio

Run these commands from the project root in two separate terminals:

```sh
npm run dev
```

Open the Vite URL printed in the terminal (normally http://localhost:5173).

```sh
npm run server
```

The FastAPI server runs at http://127.0.0.1:8000; interactive API docs are at http://127.0.0.1:8000/docs.

Backend application code belongs in `server/main.py`. The `server/venv/` directory contains only the Python environment and is ignored by Git.

## Install dependencies on a new checkout

```sh
npm --prefix client ci
python3 -m venv server/venv
server/venv/bin/python -m pip install -r server/requirements.txt
```
