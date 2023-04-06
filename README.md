<h1>Nedap-FE</h1>
<p>This project contains two components, a sign-up form and a sign-up result form, built using Angular. It also includes a sign-in service that interacts with a REST API to create user accounts.</p>
<h2>Components</h2>
<h3>Sign-up Form</h3>
<p>This component allows users to create a new account by filling out a form. It includes form validation and sends data to the sign-in service.</p>
<h3>Sign-up Result Form</h3>
<p>This component displays the result of a sign-up attempt. It receives data from the sign-in service and displays either a success or failure message.</p>
<h2>Services</h2>
<h3>Sign-in Service</h3>
<p>This service interacts with a REST API to create new user accounts. It includes a <code>createUser</code> method that sends user data to the API using the <code>fetch</code> function.</p>
<h2>Other files</h2>
<h3>Routing module</h3>
<p>The routing module defines the application's routes. It includes two routes for the sign-up and sign-up result components.</p>
<h3>App module</h3>
<p>The app module is the main module of the application. It imports the necessary Angular modules and declares the components used in the app.</p>
<h3>Package.json</h3>
<p>The package.json file lists the dependencies and devDependencies of the project.</p>
<h2>Installation</h2>
<p>To install the project dependencies, run:</p>
<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">npm install
</code></div></div></pre>
<h2>Running the app</h2>
<p>To run the app, use the following command:</p>
<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash>npm <span class="hljs-keyword">start</span>
</code></div></div></pre>
<p>This will start the development server and open the app in your browser at <a href="http://localhost:4200" target="_new">http://localhost:4200</a>.</p>
<h2>Running tests</h2>
<p>To run the tests, use the following command:</p>
<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm <span class="hljs-built_in">test</span>
</code></div></div></pre>
<p>This will run the unit tests for the project.</p>
<p>Please Note: Unit tests are not completed</p>
