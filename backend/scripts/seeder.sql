-- Dodawanie przykładowych rekordów do tabeli Products
INSERT INTO Products (Name, Model, SerialNumber, ManufactureDate, Price)
VALUES
    ('Laptop', 'ABC123', 'SN123456', '2023-01-15', 1200.50),
    ('Smartphone', 'XYZ789', 'SN789012', '2023-02-20', 899.99),
    ('Headphones', 'HD456', 'SN456789', '2023-03-10', 99.99),
    ('Tablet', 'TAB001', 'SN001234', '2023-04-05', 599.99),
    ('Camera', 'CAM321', 'SN321654', '2023-05-12', 799.99),
    ('Printer', 'PRN567', 'SN567890', '2023-06-25', 299.99),
    ('Smartwatch', 'SW001', 'SN789123', '2023-07-30', 499.99),
    ('Speaker', 'SPK789', 'SN789456', '2023-08-17', 149.99),
    ('Router', 'RT001', 'SN789019', '2023-09-22', 79.99),
    ('External Hard Drive', 'EHD456', 'SN456987', '2023-10-01', 199.99);

-- Dodawanie przykładowych rekordów do tabeli Customers
INSERT INTO Customers (FirstName, LastName, Email, Password, IsAdmin)
VALUES
    ('John', 'Doe', 'john.doe@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Jane', 'Smith', 'jane.smith@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Mike', 'Johnson', 'mike.johnson@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Emily', 'Brown', 'emily.brown@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('David', 'Williams', 'david.williams@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Sarah', 'Miller', 'sarah.miller@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Chris', 'Wilson', 'chris.wilson@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Laura', 'Taylor', 'laura.taylor@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Mark', 'Anderson', 'mark.anderson@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Amy', 'Martinez', 'amy.martinez@example.com', '$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', FALSE),
    ('Admin','Admin','admin@exmaple.com','$2a$12$eImiTXuWVxfM37uY4JANjOAdWCNStRuSs55HElwvriRt7adiwEA9y', TRUE);

-- Dodawanie przykładowych rekordów do tabeli Orders
INSERT INTO Orders (CustomerID, ProductID, OrderDate, TotalPrice)
VALUES
    (1, 1, '2024-01-05', 1200.50),
    (2, 2, '2024-02-10', 899.99),
    (3, 3, '2024-03-15', 99.99),
    (4, 4, '2024-04-20', 599.99),
    (5, 5, '2024-05-25', 799.99),
    (6, 6, '2024-06-30', 299.99),
    (7, 7, '2024-07-05', 499.99),
    (8, 8, '2024-08-10', 149.99),
    (9, 9, '2024-09-15', 79.99),
    (10, 10, '2024-10-20', 199.99);

-- Dodawanie przykładowych rekordów do tabeli ServiceRequests
INSERT INTO ServiceRequests (ProductID, IssueDescription, RequestDate, Status)
VALUES
    (1, 'Screen cracked', '2024-01-05', 'Pending'),
    (2, 'Battery not holding charge', '2024-02-10', 'In Progress'),
    (3, 'No sound', '2024-03-15', 'Resolved'),
    (4, 'Touchscreen not responsive', '2024-04-20', 'Pending'),
    (5, 'Lens error', '2024-05-25', 'In Progress'),
    (6, 'Paper jam', '2024-06-30', 'Resolved'),
    (7, 'Battery draining quickly', '2024-07-05', 'Pending'),
    (8, 'Bluetooth connectivity issues', '2024-08-10', 'In Progress'),
    (9, 'No internet connection', '2024-09-15', 'Resolved'),
    (10, 'Not recognized by computer', '2024-10-20', 'Pending');

INSERT INTO AppSettings (Name, Value) VALUES 
    ('Hash','$2a$12$eImiTXuWVxfM37uY4JANjQ');