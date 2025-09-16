# key helps to find value in dictionary
emails = {
	"Gal":  "g@gmail.com",
	"Eric": "abdueric4@gmail.com"
}

# print(hash("Gal"))
# print(emails["Eric"])

emails["test"] = "test@gmail.com"
emails.update({"Josh": "josh@gmail.com"})
emails.update(Josh="newemail@gmail.com")

search = "Josh"

if search in emails:
    print(f"emailing to {emails[search]}")

# Sets
my_fav = {"red", "green", "black", "blue", "purple"}
her_fav = {"blue", "orange", "purple", "green"}

# union
all_favs = my_fav | her_fav
print(all_favs)

# intersection
intersection = my_fav & her_fav
print(intersection)

# difference
print(my_fav - her_fav)
print(her_fav - my_fav)