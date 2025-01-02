https://fakestoreapi.com/docs

1. NIE KORZYSTAJ Z NARZĘDZI AI - skorzystaj z dokumentacji i forów lub pytaj :)


2. Ostyluj z wykorzsytaniem styli komponentu i globalnych
Dodaj prosty styling (np. klasa .product-card) do kart produktów.
Stwórz menu w ramach którego możliwa będzie nawigacja do modułu fake store


3. Filtrowanie listy produktów

Dodaj do powyższego przykładu input tekstowy, w którym użytkownik może wpisać słowo kluczowe. (event onChange lub button z click)
W czasie wpisywania filtruj widoczne produkty po tytule (lub kategorii).
Zaimplementuj tę funkcjonalność w komponencie
Podświetlanie elementów

4. Napisz prostą dyrektywę, która po najechaniu myszką lub kliknięciu powiększy dane dotyczące produkt na liście.
Wypróbuj różne kombinacje podświetlenia przekazywane jako input dyrektywy.



5. Tworzenie własnego pipe’a

Stwórz pipe przycinający długi tekst (np. opis produktu), tak aby w karcie produktu wyświetlał się np. maksymalnie 50 znaków.
Zadbaj o to, żeby pipe przyjmował parametr określający maksymalną liczbę znaków.


6. Pobieranie pojedynczego produktu

Dodaj do aplikacji nowe ścieżki, np. /products/:id, i stwórz komponent ProductDetailsComponent.
Po przejściu na tę trasę pobierz szczegóły produktu, wyświetl je w widoku (tytuł, zdjęcie, opis, cena itp.).
Dodaj przycisk “Wróć”, który przeniesie z powrotem do listy produktów.


7. Tworzenie i wysyłanie nowego produktu

Skorzystaj z końcówki FakeStoreAPI do tworzenia (dodawania) nowego produktu: POST https://fakestoreapi.com/products.
Przygotuj prosty formularz, w którym można wpisać tytuł, opis, cenę i kategorię.
Po wysłaniu formularza wyświetl w konsoli (lub na ekranie) informacje o produkcie, który został dodany (API zwróci obiekt).



8. Stwórz prostą paginację lub przyciski “Pokaż 5 / Pokaż 10 / Pokaż wszystkie”, które kontrolują, ile produktów wyświetla się na stronie.



Przydatne zmienne w komendach: 

ng generate component --standalone false ( chcemy mieć posegregowane komponenty w modułach)