# Cara Install

\*_Tutorial ini untuk A.A. Istri Dina Prabawati_

## Table of content

[PERSIAPAN](#Persiapan)

[INSTALASI](#Instalasi)

[CARA MENJALANKAN](#Cara-menjalankan)

## Persiapan

install ini pada laptop

-   [x] Composer [cara install](https://getcomposer.org/doc/00-intro.md)
-   [x] Node.JS [cara install](https://nodejs.org/en/)
-   [x] PHP v8.2 ++ [cara install](https://www.apachefriends.org/download.html)

## Instalasi

buka project pada VS code. kemudian klik **terminal** + **new terminal**.
lalu jalankan perintah dibawah:

```
composer update
```

tunggu hingga selesai.
kemudian install npm packages dengan cara yang sama:

```
npm install
```

kemudian buat file dengan nama ".env" dengan cara copy **.env.example** di root project dan paste di root project.

atau jika pakai macbook jalankan perintah ini:

```
cp .env.example .env
```

jika windows jalankan perintah ini:

```
copy .env.example .env
```

kemudian buat database dengan nama:

```
kredit_koperasi
```

setelah semua persiapan diatas beres saatnya setting project.
jalankan perintah:

```
php artisan migrate
```

kemudian pergi ke folder `config` dan cari file `auth` dan buka.
pada file `auth` cari `defaults` lalu ubah `guard` menjadi `api` seperti ini:

```php
'defaults' => [
        'guard' => 'api',
        'passwords' => 'users',
],
```

kemudian ini:

```
php artisan peddos-permission-role:sync
```

lalu ini:

```
php artisan persiapan
```

ok, jika semua berhasil ubah kembali `api` ke `web` seperti semula

```php
'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
],
```

terakhir buat akun super admin agar bisa login

```
php artisan buat:super-admin
```

super admin berhasil dibuat emailnya `super@admin` dan password nya `password`

## Cara menjalankan

jika semua persiapan dan instalasi selesai dan berhasi silahkan jalankan program dengan cara:

```
php artisan serve
```

lalu buka terminal baru satu lagi

```
npm run dev
```

lalu akses program dengan link ini:

```
http://127.0.0.1:8000
```

setelah muncul login, masukan kredensial super admin yang sudah dibuat sebelumnya
dan program siap digunakan.

> Happy hacking
