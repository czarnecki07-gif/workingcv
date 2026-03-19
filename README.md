# WorkingCV v2

Gotowa aplikacja z backendem Node.js.

## Co zawiera
- logowanie i rejestrację użytkownika
- zapis projektów CV i listów motywacyjnych po stronie serwera
- prawdziwe generowanie PDF po backendzie
- 2 darmowe szablony CV
- 6 eleganckich szablonów premium
- blokadę premium
- integrację Stripe Checkout + webhook
- 10 wersji językowych interfejsu
- logo WorkingCV w aplikacji

## Uruchomienie
1. Rozpakuj ZIP.
2. Skopiuj `.env.example` do `.env` i uzupełnij dane Stripe oraz własny `SESSION_SECRET`.
3. W katalogu projektu uruchom:
   - `npm install`
   - `npm start`
4. Wystaw aplikację przez reverse proxy (np. Nginx) albo uruchom bezpośrednio na hostingu Node.js.

## Wymagania
- Node.js 18+
- serwer z obsługą aplikacji Node.js

## Stripe
Webhook Stripe ustaw na:
`/api/stripe/webhook`

Po poprawnej płatności konto użytkownika dostaje status premium.

## Dane
Aplikacja zapisuje dane do pliku:
`data/db.json`

Na produkcji warto robić backup tego pliku albo później podmienić storage na bazę danych.
