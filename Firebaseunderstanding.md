Firebase Integration Guide - DoPost


Overview

This document explains every Firebase service, method, concept, and implementation used in the DoPost project.

The purpose of this document is to:

Understand how authentication works
Understand how Firestore stores data
Explain every Firebase function used
Prepare for interviews and project presentations
Serve as internal project documentation
Why Firebase?

Traditionally a web application requires:

React Frontend
→ Node.js Backend
→ Express API
→ SQL Database

This requires:

Backend development
Authentication implementation
Password security
Database management
API development

Firebase provides all of these services directly.

Architecture:

React App
↓
Firebase Authentication
↓
Firestore Database

This significantly reduces development time while remaining production-ready.

Firebase Services Used
1. Firebase Authentication

Purpose:

User Signup
User Login
User Logout
Session Management
Persistent Authentication

Firebase securely stores user credentials and manages authentication tokens.

We never store passwords ourselves.

Firebase automatically:

Hashes passwords
Validates credentials
Creates secure sessions
2. Firestore Database

Purpose:

Store user profiles
Store addresses
Store orders
Store shipments
Store application data

Firestore is a NoSQL database.

Data is stored as:

Collection
→ Document
→ Fields

Example:

users
└── UID
├── name
├── email
└── phone

Project Structure

src/
├── firebase.js
├── App.jsx
├── components/
│ ├── Login.jsx
│ ├── Signup.jsx
│ ├── Profile.jsx
│ ├── Settings.jsx
│ └── NavigationBar.jsx

firebase.js

Purpose:

Initialize Firebase once and export services.

Example:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

Authentication Concepts
What is a User?

After signup Firebase creates:

{
uid: "abc123",
email: "user@gmail.com"
}

The uid is the most important field.

Every user receives a unique uid.

Example:

uid = "KJHS7821AB"

This uid never changes.

It is used as the primary identifier throughout the application.

Signup Flow

User enters:

Name
Email
Phone
Password

Code:

createUserWithEmailAndPassword(
auth,
email,
password
)

Firebase:

Creates account
Hashes password
Generates uid
Returns user object

Result:

userCredential.user

Why Use createUserWithEmailAndPassword?

Benefits:

Secure
Password hashing included
Session creation included
Error handling included

Without Firebase:

We would need:

Backend API
Password hashing
User validation
Token generation

Firebase handles all of this.

Firestore User Profile Storage

Authentication stores:

Email
Password
UID

Authentication DOES NOT store:

Name
Phone
Addresses

Therefore we use Firestore.

Example:

await setDoc(
doc(db, "users", user.uid),
{
name,
email,
phone
}
);

Stored structure:

users
└── user.uid
├── name
├── email
└── phone

setDoc()

Purpose:

Create or overwrite a document.

Syntax:

setDoc(reference, data)

Example:

await setDoc(
doc(db, "users", uid),
{
name: "Pratyush"
}
);

doc()

Purpose:

Create a reference to a Firestore document.

Example:

doc(
db,
"users",
uid
)

Meaning:

users/uid

No database operation occurs.

It only creates a reference.

Login Flow

Code:

signInWithEmailAndPassword(
auth,
email,
password
)

Firebase:

Checks email
Checks password
Creates session
Returns user object
signInWithEmailAndPassword()

Purpose:

Authenticate existing users.

Returns:

userCredential.user

Logout Flow

Code:

signOut(auth)

Purpose:

Destroy session
Remove authentication token
Trigger auth listener

After logout:

auth.currentUser = null

Auto Login

Problem:

Without auto login:

Refresh page
↓
User returns to Login screen

Solution:

onAuthStateChanged()

onAuthStateChanged()

Purpose:

Listen for authentication state changes.

Example:

onAuthStateChanged(
auth,
(user) => {
setUser(user);
}
)

Triggers when:

User logs in
User logs out
Page refreshes
Session restores
Why is Auto Login Possible?

Firebase stores:

Authentication token
Session information

When page reloads:

Firebase restores session automatically.

This creates a seamless user experience.

auth.currentUser

Purpose:

Access currently authenticated user.

Example:

const user = auth.currentUser;

Returns:

{
uid,
email
}

Used whenever application needs current user information.

Firestore Data Retrieval

Code:

const docSnap = await getDoc(docRef);

Purpose:

Retrieve a single document.

exists()

Code:

if(docSnap.exists())

Purpose:

Check whether document exists.

Prevents runtime errors.

data()

Code:

docSnap.data()

Purpose:

Return document contents.

Example:

{
name,
email,
phone
}

Profile Page Flow

User logs in
↓
auth.currentUser.uid
↓
Firestore
↓
users collection
↓
Fetch profile document
↓
Display data

Navigation Avatar Flow

User name:

Pratyush

Code:

name.charAt(0).toUpperCase()

Result:

P

Displayed in navbar avatar.

Firestore Structure Used

users
└── uid
├── name
├── email
├── phone
└── createdAt

Future collections:

addresses
orders
payments
shipments

Future Address Structure

addresses
└── addressId
├── userId
├── city
├── state
├── pincode
└── type

Future Orders Structure

orders
└── orderId
├── userId
├── pickupAddress
├── destinationAddress
├── packageType
└── status

Security Rules

Current State:

Test Mode

Meaning:

Anyone can read/write.

Suitable for development only.

Production Example:

allow read, write:
if request.auth != null
&& request.auth.uid == userId;

Benefits:

User can only access own data
Prevents unauthorized access
Common Interview Questions
What is Firebase?

Firebase is a Backend-as-a-Service platform providing Authentication, Database, Storage, Hosting, and other backend services.

What is Firestore?

Firestore is Firebase's NoSQL document database.

Difference Between SQL and Firestore?

SQL:

Tables
Rows
Columns

Firestore:

Collections
Documents
Fields

What is a Collection?

A group of related documents.

Example:

users

What is a Document?

A JSON-like object inside a collection.

Example:

users/uid

What is UID?

Unique identifier generated by Firebase Authentication.

Used as primary user key.

Why Use UID Instead of Email?
Unique
Permanent
Cannot collide
Safer for database relationships
Why Use onAuthStateChanged?

To synchronize application state with authentication state.

Provides:

Auto login
Logout detection
Session restoration
Why Not Store Passwords in Firestore?

Passwords should never be stored manually.

Firebase Authentication:

Hashes passwords
Secures credentials
Handles login validation
Difference Between Authentication and Firestore?

Authentication:

Email
Password
UID

Firestore:

Name
Phone
Addresses
Orders
Current DoPost Features

Implemented:

✓ Signup
✓ Login
✓ Logout
✓ Auto Login
✓ Dynamic Profile
✓ Dynamic Settings
✓ Dynamic Navigation Avatar

Upcoming:

□ Saved Addresses
□ Orders
□ Shipments
□ Payments
□ Admin Dashboard

Conclusion

Firebase provides a complete backend solution for DoPost.

Current architecture:

React
↓
Firebase Authentication
↓
Firestore Database

This setup is scalable, secure, and suitable for MVPs, startup prototypes, hackathons, and production applications.