CREATE DATABASE postsdb

-- CREATE TABLE post(
--     id SERIAL PRIMARY KEY,
--     nombre VARCHAR(255) UNIQUE,
--     descripcion VARCHAR(255)
-- );

CREATE TABLE public.post
(
    id serial,
    nombre "char",
    descripcion "char",
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.post
    OWNER to postgres;