
# BaltimoreCode-Coffee.github.io
The official website of Baltimore Code and Coffee

## Contributing to the Project

Thank you for your interest in contributing to the Baltimore Code and Coffee website! Below are instructions to help you get started with testing your changes locally, creating pull requests, and ensuring your contributions follow our guidelines.

### Serving Any Branch Locally for Testing

To test your changes locally, you can serve any branch using the `http-server` npm package. Follow these steps:

1. **Clone the repository** if you haven't already:
   Use GitHub Desktop File->Clone, or if you insist on the command line:
   ```bash
   git clone https://github.com/BaltimoreCode-Coffee/BaltimoreCode-Coffee.github.io.git
   ```
   
2. **Install http-server** if you don't have it installed:
   ```bash
   npm install -g http-server
   ```
   
3. **Serve the project** without caching:
   ```bash
   http-server -c-1
   ```
   
5. **Access the site** in your browser:
   - Open your browser and navigate to `http://localhost:8080`. You should see the website as it would appear with your changes applied.

### Creating a Pull Request

Once you've made and tested your changes, you can submit them for review by creating a pull request:

1. **Commit your changes**:
   Github Desktop: Commit
   or
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   
2. **Push your branch** to the remote repository:
   Github Desktop: Push
   or
   ```bash
   git push origin <branch-name>
   ```
   
3. **Create a pull request**:
   - Go to the repository on GitHub.
   - Click on the "Compare & pull request" button next to your branch.
   - Add a clear title and description for your pull request, explaining what changes you made and why.
   - Click "Create pull request".

### Additional Guidelines for Contributors

- **Write Clear Commit Messages**: Your commit messages should clearly describe the changes made. This helps maintainers and other contributors understand your work.
  
- **Follow Coding Standards**: Ensure your code adheres to the project's coding standards. Consistent style and formatting are crucial for maintaining a clean codebase.

- **Ask for Help**: If you're unsure about any part of the process, feel free to ask for help by opening an issue or commenting on an existing one. The community is here to support you!

- **Review the Documentation**: Before contributing, it’s a good idea to review the existing documentation to understand the project's structure and guidelines.
