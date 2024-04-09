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
    Phone      VARCHAR(255)
);

CREATE TABLE Orders
(
    OrderID    SERIAL PRIMARY KEY,
    CustomerID INTEGER REFERENCES Customers (CustomerID),
    OrderDate  DATE,
    TotalPrice NUMERIC(10, 2)
);

CREATE TABLE OrderDetails
(
    OrderDetailID SERIAL PRIMARY KEY,
    OrderID       INTEGER REFERENCES Orders (OrderID),
    ProductID     INTEGER REFERENCES Products (ProductID),
    Quantity      INTEGER,
    PricePerItem  NUMERIC(10, 2)
);

CREATE TABLE ServiceRequests
(
    ServiceRequestID SERIAL PRIMARY KEY,
    ProductID        INTEGER REFERENCES Products (ProductID),
    IssueDescription TEXT,
    RequestDate      DATE,
    Status           VARCHAR(255)
);

CREATE TABLE ServiceActions
(
    ServiceActionID   SERIAL PRIMARY KEY,
    ServiceRequestID  INTEGER REFERENCES ServiceRequests (ServiceRequestID),
    ActionDescription TEXT,
    ActionDate        DATE,
    Technician        VARCHAR(255)
);