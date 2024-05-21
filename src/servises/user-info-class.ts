interface ProfileData {
  name?: string;
  email?: string;
  message?: string;
}

interface LoginResponse {
  token: string;
  message: string;
}

class UserService {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await fetch(`${this.baseURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data: LoginResponse = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      return data;
    } else {
      throw new Error(data.message || "Login failed");
    }
  }

  logout(): void {
    localStorage.removeItem("token");
  }

  async getProfile(): Promise<ProfileData> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User not logged in");
    }

    const response = await fetch(`${this.baseURL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: ProfileData = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Failed to fetch profile");
    }
  }

  async updateProfile(profileData: ProfileData): Promise<ProfileData> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User not logged in");
    }

    const response = await fetch(`${this.baseURL}/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    const data: ProfileData = await response.json();
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || "Failed to update profile");
    }
  }

  async deleteAccount(): Promise<{ message: string }> {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("User not logged in");
    }

    const response = await fetch(`${this.baseURL}/profile`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      this.logout();
      return { message: "Account deleted successfully" };
    } else {
      const data = await response.json();
      throw new Error(data.message || "Failed to delete account");
    }
  }
}


const userService = new UserService("https://api.example.com");

async function testUserService() {
  try {
    const loginData = await userService.login("username", "password");
    console.log("Login successful:", loginData);

    const profileData = await userService.getProfile();
    console.log("Profile data:", profileData);

    const updatedProfile = await userService.updateProfile({
      name: "New Name",
    });
    console.log("Updated profile:", updatedProfile);

    const deleteMessage = await userService.deleteAccount();
    console.log(deleteMessage);
  } catch (error) {
    console.error(error);
  }
}

testUserService();
