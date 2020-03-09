class Github {
  constructor() {
    this.client_id = "004512353ff55b8e5489";
    this.client_secret = "ddeb1bfd6a97f8c8c839e918f4c76f119df864f1";
    this.repos_count = 6;
    this.repose_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    return {
      profile,
      repos
    };
  }
}
