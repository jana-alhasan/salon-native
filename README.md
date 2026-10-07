# Salon Finder — React Native Prototype

An **individual React Native prototype** for browsing beauty salons. This repository is separate from the private salon-owner web product I contributed to professionally.

## Implemented code paths

- Salon list UI built with `FlatList`
- Paginated salon fetching logic using Axios and `onEndReached`
- Debounced salon-name search with `use-debounce`
- Bottom-tab navigation across Home, Store, Cart, Notifications, Offers, and Profile
- Salon cards with images, ratings, and address information
- Local/mock UI content for screens that do not have backend integration

## Tech used in the source

- React Native 0.73 / React 18
- React Navigation
- JavaScript
- Axios
- `use-debounce`
- `react-native-ratings`
- `react-native-vector-icons`

## Current status

The source contains API integration for the Home salon list and Store search. Those calls point to the development API host that was available when the prototype was built.

**Current limitation:** the configured development host no longer resolves as of October 2026, so this repository should be treated as implementation evidence for the React Native UI, navigation, pagination logic, debounced search, and Axios integration—not as a currently working live-data application.

Cart, Notifications, Offers, and Profile are UI prototypes using local/mock content; this repository does not implement production booking, payment, persistent cart state, or user authentication.

## Evidence boundary

This is not the source code of the private production salon-owner web application from my professional experience, and it should not be used to imply ownership of that product. It is a separate individual learning/prototyping project.

The repository contains JavaScript application files. TypeScript packages/configuration are present in the React Native tooling, but the application source itself is not presented here as TypeScript work.
