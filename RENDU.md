### Route `/citations`
- **Statut :** 200 (OK).
- **Contenu :** renvoie la liste des citations
- **Format :** JSON.

### Route `/inconnue`
- **Statut :** 404 (Not Found).
- **Contenu :** renvoie le message « Route introuvable ».
- **Format :** JSON.

### À quoi servent `req` et `res` ?
- `req` représente la requête envoyée par le navigateur au serveur.
- `res` permet au serveur de répondre au navigateur.

### Content-Type

- **`/ping` :** `text/plain` → renvoie du texte simple.
- **`/citations` :** `application/json` → renvoie des données au format JSON.

### Conclusion
La route `/ping` sert à vérifier que le serveur fonctionne. La route `/citations` permet de récupérer les citations. Une route inconnue renvoie une erreur 404.