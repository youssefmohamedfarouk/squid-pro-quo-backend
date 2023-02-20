\c squid_pro_quo_db; 

INSERT INTO motorcycles ( img, owner, make, model, year, odometer, is_new, description, title_on_hand, price, city, state ) VALUES 
    ('https://cdn.shopify.com/s/files/1/0565/9921/6320/products/PRODUCTPAGES70125_1445x.jpg?v=1640080535', 'Youssef M.', 'Husqvarna', 'Vitpilen 701', 2019, 950, false, 'Mods include Crash Bars, Radiator Guard, O2 Sensor Delete', true, 8500, 'Brooklyn', 'NY' ),
    ('https://www.honda.co.uk/content/dam/central/motorcycles/rcv/RCV_mobile_3.jpg/jcr:content/renditions/m_r.jpg', 'Marc M.', 'Honda', 'RC213V', 2023, 3000, false, 'Telescopic Fork, Ohlins Pro-Link Suspension, Carbon Fiber Brembo Brake Lines', true, 240000, 'Tallahassee', 'FL' ),
    ('https://kickstart.bikeexif.com/wp-content/uploads/2022/10/arch-1s-performance-cruiser-1.jpg', 'Keanu R.', 'Arch', '1S', 2023, 0, true, 'Bespoke Built Bike', true, 128000, 'Los Angeles', 'CA' ),
    ('https://kickstart.bikeexif.com/wp-content/uploads/2022/10/arch-1s-performance-cruiser-1.jpg', 'Keanu R.', 'Arch', '1S', 2023, 0, true, 'Bespoke Built Bike', true, 128000, 'Los Angeles', 'CA' )
    ;

INSERT INTO bids (bidder, price, listing_id) VALUES
    ('Keanu R.', 9000, 1),
    ('John A.', 7500, 1),
    ('Phil C.', 8000, 1),
    ('Joan M.', 240000, 2),
    ('Youssef M.', 10, 3),
    ('Casey S.', 140000, 3)
    ;

