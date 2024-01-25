### SkyCanvas Weather App

![SkyCanvas site](https://github.com/diecodev/moick-saas/assets/51871681/24f5f41e-5aa5-4ae3-a50a-dad692a1ed81)

SkyCanvas is a weather application developed as a solution to the technical test for ViewStats (website: [https://viewstats.com](https://viewstats.com)). The application is designed to provide users with accurate and up-to-date weather information for cities around the world.

## Features

- **Homepage (Index):**
  - The main landing page where users get introduced to the SkyCanvas weather app.
- **Weather Information:**
  - Route: `/search?q={city_name}&lat={city_lat}&lon={city_lon}`
  - This route provides detailed weather information for the selected city.
- **Autocomplete City Search:**

  - The application supports a user-friendly autocomplete feature when searching for cities, making it easy to find the desired location.

- **Optimized Data Fetching:**

  - The data fetching process is optimized to prevent unnecessary API requests, ensuring efficient use of resources and a smoother user experience.

- **Error Handling:**

  - The application includes robust error handling to gracefully manage unexpected situations, providing a seamless experience even in challenging conditions.

- **Loading State:**
  - The project adheres to the specified requirements by displaying a loading state, keeping users informed during data retrieval.

## Getting Started

To run the SkyCanvas Weather App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/diecodev/skycanvas-viewstats.git
   ```

2. Install dependencies:

   ```bash
   cd skycanvas-viewstats
   pnpm install
   ```

3. Run the application:

   ```bash
   pnpm dev
   ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to explore the SkyCanvas Weather App.

> [!WARNING]
> You need to create an account in [Open Weather](https://openweathermap.org/api/one-call-3#current) and subscribe to the on call service. You need to copy and paste your api key in a `.env.local` file (take a look in the .env.example file to know how to name your env vars)
