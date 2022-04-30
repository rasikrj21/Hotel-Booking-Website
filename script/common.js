let headerText = 
`<!-- Login Modal -->
                <div class="modal fade" id="login-modal" tabindex="-1" aria-labelledby="login-modal-label" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                        <button id="modal-close-button" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body" style="text-align: center;">
                        <form id="login-form" action="index.html" method="get">
                            <div class="form-item">
                                <label for="username">Username:</label>
                                <input type="text" id="username" name="username" placeholder="Enter Username" required>
                            </div>
                            <div class="form-item">
                                <label for="password">Password:</label>
                                <input type="password" id="password" name="password" placeholder="Enter Password" required>
                            </div>
                            <hr>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

        <!-- Contact Us Modal -->
                <div class="modal fade" id="contact-modal" tabindex="-1" aria-labelledby="contact-modal-label" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="contact-modal-label">Get in Touch</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <p>Thank you for reaching out!!!<br>Please enter your email and we will get back to you.</p>

                        <form action="index.html" method="get">
                            <label for="email">Email: </label>
                            <input type="email" placeholder="Enter your email" name="email" required><br><br>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

        <div class="main-wrapper">
            
            <!-- Header section with required functionality -->
            <header>
                <a href="index.html"><img style="height: 60px;" src="assets/images/logo.png" alt="The Hotel Logo"></a>

                <button id="login-button" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#login-modal" style="margin-right: 1%;">
                  Login
                </button>
                <button id="logout-button" onClick="logout();" type="button" class="btn btn-light" style="margin-right: 1%;">
                  Logout
                </button>

            </header>`;

document.getElementById("header-parent").innerHTML = headerText;

let footerText = 
`<!-- Footer section with the required functionality -->
            <footer>
                <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#contact-modal" style="color: #f4f4f4;">
                  Contact Us
                </button>
                <p style="font-size: 10px;">© 2020 ROOM SEARCH PVT. LTD.</p>
                <div class="socials">
                    <a href="https://www.facebook.com/"><img src="assets/images/facebook.png" alt="Facebook Logo"></a>
                    <a href="https://www.instagram.com/"><img src="assets/images/instagram.png" alt="Instagram Logo"></a>
                    <a href="https://twitter.com/"><img src="assets/images/twitter.png" alt="Twitter Logo"></a>
                </div>
            </footer>`;

document.getElementById("footer-parent").innerHTML = footerText;

// Login authentication

const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formData = new FormData(loginForm);
  var userName = formData.get('username');
  var passWord = formData.get('password');
  if (userName === "admin" && passWord === "admin") {
    window.localStorage.setItem('username', userName);
    window.localStorage.setItem('password', passWord);
    access();
  } else {
    alert("User not Recognized!!!");
  }
});

// Providing access if it's the admin...

function access() {
  document.getElementById("modal-close-button").click();
  alert("Successfully Logged in!!")
  document.getElementById("pay-button").removeAttribute("disabled");
  document.getElementById("login-button").style.display = "none";
  document.getElementById("logout-button").style.display = "inline-block";
}

// Logging out

function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  document.getElementById("pay-button").setAttribute("disabled", "true");
  document.getElementById("login-button").style.display = "inline-block";
  document.getElementById("logout-button").style.display = "none";
}