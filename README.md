# Salon Finder — React Native App

A mobile app for discovering and browsing beauty salons, built with React Native.

## ✨ Features
- Browse salons with infinite-scroll pagination, pulling live data from a REST API
- Debounced real-time search for salons by name
- Custom bottom-tab navigation with tailored icons and header per screen
- Salon cards with cover image, rating, and address

## 🛠️ Built With
- React Native · React Navigation (Bottom Tabs)
- Axios (API integration)
- use-debounce (search optimization)
- react-native-ratings, react-native-vector-icons

## 🚧 Status

All six screens (Home, Store, Cart, Notifications, Offers, Profile) are implemented
with a working UI and navigation flow.

- **Home & Store** are fully connected to a live REST API (salon listings,
  paginated results, debounced search).
- **Cart, Notifications, Offers, and Profile** are complete on the UI/UX side
  and currently use local mock data, pending backend endpoints for
  bookings, notifications, promotions, and user authentication.

### Planned Next
- Connect Cart, Notifications, Offers, and Profile to real API endpoints
- Add persistent cart state (Context API or Redux)
- Add user authentication for the Profile screen

## 🎯 What I Learned
Implementing debounced search and paginated API fetching in a real mobile app,
and structuring navigation with custom tab bar styling.
