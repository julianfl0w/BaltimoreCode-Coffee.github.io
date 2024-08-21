
# BaltimoreCode-Coffee.github.io
The official website of Baltimore Code and Coffee

## Contributing to the Project

Thank you for your interest in contributing to the Baltimore Code and Coffee website! Below are instructions to help you get started with testing your changes locally, creating pull requests, and ensuring your contributions follow our guidelines.

### Serving Any Branch Locally for Testing

To test your changes locally, you can serve any branch using the `http-server` npm package. Follow these steps:

1. **Download Github Desktop**:  
   **Windows:**  
https://desktop.github.com/download/  
   **Ubuntu**  
```bash
sudo wget https://github.com/shiftkey/desktop/releases/download/release-3.1.1-linux1/GitHubDesktop-linux-3.1.1-linux1.deb
### Uncomment below line if you have not installed gdebi-core before
# sudo apt-get install gdebi-core 
sudo gdebi GitHubDesktop-linux-3.1.1-linux1.deb
```

2. **Clone the repository** if you haven't already:
   **GitHub Desktop:** 
   - Open GitHub Desktop and go to `File` -> `Clone Repository`.
   - Select the URL tab and paste the repository link: `https://github.com/BaltimoreCode-Coffee/BaltimoreCode-Coffee.github.io.git`
   - Choose the local path where you want to clone the repository.
   - Click `Clone`.
   
   or if you prefer the command line:
   ```bash
   git clone https://github.com/BaltimoreCode-Coffee/BaltimoreCode-Coffee.github.io.git
   ```
   
3. **Install http-server** if you don't have it installed:
   ```bash
   npm install -g http-server
   ```
   
4. **Serve the project** without caching:
     ```bash
     http-server -c-1
     ```
   
5. **Access the site** in your browser:
   - Open your browser and navigate to `http://localhost:8080`. You should see the website as it would appear with your changes applied.

### Creating a Pull Request

Once you've made and tested your changes, you can submit them for review by creating a pull request:

1. **Commit your changes**:
   - In GitHub Desktop:
     - Write a summary of your changes in the `Summary` field.
     - Optionally, add a description.
     - Click `Commit to <branch-name>`.
   
   or via command line:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```
   
2. **Push your branch** to the remote repository:
   - In GitHub Desktop:
     - Click `Push origin` in the toolbar.
   
   or via command line:
   ```bash
   git push origin <branch-name>
   ```
   
3. **Create a pull request**:
   - In GitHub Desktop:
     - Click `Branch` -> `Create Pull Request` to open the GitHub page.
   
   or via GitHub web:
   - Go to the repository on GitHub.
   - Click on the "Compare & pull request" button next to your branch.
   - Add a clear title and description for your pull request, explaining what changes you made and why.
   - Click "Create pull request".

### Additional Guidelines for Contributors

- **Write Clear Commit Messages**: Your commit messages should clearly describe the changes made. This helps maintainers and other contributors understand your work.
  
- **Follow Coding Standards**: Ensure your code adheres to the project's coding standards. Consistent style and formatting are crucial for maintaining a clean codebase.

- **Ask for Help**: If you're unsure about any part of the process, feel free to ask for help by opening an issue or commenting on an existing one. The community is here to support you!

- **Review the Documentation**: Before contributing, itâ€™s a good idea to review the existing documentation to understand the project's structure and guidelines.
