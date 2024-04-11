CREATE TABLE Products
(
    ProductID       SERIAL PRIMARY KEY,
    Name            VARCHAR(255),
    Model           VARCHAR(255),
    SerialNumber    VARCHAR(255) UNIQUE,
    ManufactureDate DATE,
    Price           NUMERIC(10, 2)
);

CREATE TABLE Customers
(
    CustomerID SERIAL PRIMARY KEY,
    FirstName  VARCHAR(255),
    LastName   VARCHAR(255),
    Email      VARCHAR(255),
    Password   VARCHAR(255),
    IsAdmin    BOOLEAN
);

CREATE TABLE Orders
(
    OrderID    SERIAL PRIMARY KEY,
    CustomerID INTEGER,
    ProductID  INTEGER,
    OrderDate  DATE,
    TotalPrice NUMERIC(10, 2)
);

CREATE TABLE ServiceRequests
(
    ServiceRequestID SERIAL PRIMARY KEY,
    ProductID        INTEGER,
    IssueDescription TEXT,
    RequestDate      DATE,
    Status           VARCHAR(255)
);

CREATE TABLE AppSettings
(
    AppSettingsId SERIAL PRIMARY KEY,
    Name            VARCHAR(255),
    VALUE           VARCHAR(255)
);
