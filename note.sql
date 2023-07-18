create table if not exists notes  (
    id int auto_increment primary key,
    title varchar(255) not null,
    author varchar(255) not null,
    description varchar(255)
);
