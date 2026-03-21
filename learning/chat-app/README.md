# Chat App

## User flow (from the diagram)

1. `Register` or `Login`
2. `Add Friend by Username`
3. `View all friends`
4. Choose the next path: `Peer to Peer chat` -> `Set nickname` OR `Create Group` -> `Group Chat`
5. In `Group Chat`: `Invite new Member`, `Remove Member from Groups`, `Set Nickname to Group Member`

## Project structure

- `frontend/` - Angular UI
- `backend/` - NestJS server
- `design/` - diagrams and UX notes (see `design/user-flow/user-flow.png`)

## Run locally

### Backend (NestJS)

The backend listens on `process.env.PORT` (default: `3000`).

From `backend/`:

```bash
yarn install
yarn start:dev
```

Backend will be available at `http://localhost:3000/`.

### Frontend (Angular)

From `frontend/`:

```bash
npm install
npm run start
```

Frontend will be available at `http://localhost:4200/`.

### Convenience scripts

From `learning/chat-app/`:

- Windows: `install-both.bat` / `run-both.bat` / `stop-both.bat`
- Unix-like (WSL/Linux/macOS): `run-both.sh` / `stop-both.sh` (run `chmod +x run-both.sh stop-both.sh` once if needed)

## Notes

If you add any API configuration (base URL, auth, etc.) to the frontend later, update this README with the new environment variables and setup steps.
