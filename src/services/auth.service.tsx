import { api } from "../api";
import { LoginRequest } from "../models/LoginRequest";
import { SignupRequest } from "../models/SignupRequest";
import { User } from "../models/User";

export class AuthService {
  static instance: AuthService;
  constructor() {
    if (!AuthService.instance) AuthService.instance = this;
    return AuthService.instance;
  }
  async oauth2User() {
    return (await api.get("/oauth2/user")).data;
  }
  async login(user: LoginRequest) {
    return (await api.post("login", user)).data;
  }
  async getUser() {
    return (await api.get("/user")).data;
  }
  async signup(user: SignupRequest) {
    return (await api.post("/signup", user)).data;
  }
  saveUser(userData: { user: User; token: string }) {
    localStorage.setItem("user", JSON.stringify(userData.user));
  }
  logout() {
    api.get("/logout");
    localStorage.clear();
  }
}
