# Quiosco Next.js

This is a [Next.js](https://nextjs.org) project built with the App Router and Prisma, designed to manage a quiosco system. It includes features such as product management, order handling, and dynamic UI components.

## Features

- **Product Management**: Add, edit, and manage products with category selection and image uploads.
- **Order Management**: View and manage orders dynamically with real-time updates.
- **Dynamic UI**: Responsive design with animations and toast notifications for user feedback.
- **Server Actions**: Leverages Next.js server actions for efficient data handling.
- **Validation**: Robust form validation using `zod` schemas.
- **Image Uploads**: Integrated with Cloudinary for image management.

## Project Structure

- **`app/`**: Contains the App Router structure with pages and layouts.
- **`components/`**: Reusable UI components such as forms, buttons, and tables.
- **`src/schema/`**: Zod schemas for data validation.
- **`actions/`**: Server actions for handling product and order operations.
- **`public/`**: Static assets like images and icons.

## Technologies Used

- **Next.js**: Framework for building React applications with server-side rendering.
- **Prisma**: ORM for database management.
- **Cloudinary**: Image upload and management.
- **Zod**: Schema validation for forms and data.
- **React Toastify**: Notifications for user feedback.
- **Tailwind CSS**: Utility-first CSS framework for styling.
