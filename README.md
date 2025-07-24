## E-Commerce Platform

> A modern full-stack e-commerce application built with .NET 8 and Angular 18

This is a e-commerce platform that provides a complete shopping experience with user authentication, product management, shopping cart functionality, order processing, and payment integration.

### 🙌🏻 Testing

To view the admin page, use the credentials below: <br>
- Email = `admin@test.com`
- Password = `Pa$$w0rd`

For general users, register an account or login using the credentials below:
- Email = `tom@test.com`
- Password = `Pa$$w0rd`

### 🛠️ Tech Stack

- **Frontend**: Angular 18, TypeScript, Tailwind CSS
- **Backend**: ASP.NET Core 8, Entity Framework Core, SQL Server
- **UI Components**: Angular Material UI
- **Authentication**: ASP.NET Core Identity with JWT
- **Caching**: Redis (for session and response caching)
- **Payment**: Stripe
- **Real-time Notifications**: SignalR

### 👩🏻‍💻 Getting Started
To run this project locally:

#### Installation

1. Clone the repository
    ```bash
    git clone <repository-url>
    cd e-commerce
    ```

2. Start the infrastructure services:
   ```bash
   docker-compose up -d
   ```

3. Set up environment variables
    Create `appsettings.Development.json` in the API folder:
    ```json
    {
      "ConnectionStrings": {
        "DefaultConnection": "Server=localhost,1433;Database=ecommerce;User Id=sa;Password=Password@1;TrustServerCertificate=true",
        "Redis": "localhost:6379"
      },
      "StripeSettings": {
        "PublishableKey": "your-stripe-publishable-key",
        "SecretKey": "your-stripe-secret-key"
      }
    }
    ```

4. Run database migrations
    ```bash
    cd API
    dotnet ef database update
    ```

5. Start the development servers
    ```bash
    cd API
    dotnet run
    
    # Client (in another terminal)
    cd client
    npm install
    npm start
    ```

6. Open your browser and navigate to `http://localhost:4200`

### Features for Future Development

- Advanced analytics dashboard for sales and customer behavior
- Inventory management with low stock alerts
- Email notifications for order confirmations and status updates


### ☎️ Contact
Feel free to reach out if you have any questions or suggestions!

### 🔅 Acknowledgement
This project was developed based on the Udemy course "Learn to Build an E-Commerce App with .NET Core and Angular", with custom enhancements added.