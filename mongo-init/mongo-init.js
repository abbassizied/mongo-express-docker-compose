db = db.getSiblingDB('admin');
db.auth('admin', 'pass');

db = db.getSiblingDB('provider_service_db');

db.createUser({
  user: "myuser",
  pwd: "123456",
  roles: [
    { role: "readWrite", db: "provider_service_db" }
  ]
});

db.createCollection('provider_collection');

db.provider_collection.insertMany([
   {
    "name": "Acme Corporation",
    "address": "123 Main Street, Anytown, CA 12345",
    "email": "info@acme.com" 
  },
  {
    "name": "Fantastic Services",
    "address": "456 Elm Street, Anytown, TX 56789",
    "email": "support@fantastic.services" 
  },
  {
    "name": "Wonder Widgets",
    "address": "789 Oak Lane, Anytown, NY 00011",
    "email": "sales@wonderwidgets.com"  
  }
]);