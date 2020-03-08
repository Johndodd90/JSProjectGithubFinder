class Github {
  constructor() {
    this.client_id = "004512353ff55b8e5489";
    this.client_secret = "ddeb1bfd6a97f8c8c839e918f4c76f119df864f1";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    return {
      profile
    };
  }
}
