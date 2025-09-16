languages = ["Python", "C++", "Java", "Perl", "Python","C++", "C#", "Python", "JavaScript"]

search = "Python"
count = 0
print(f"Searching for {search}")


for language in languages:
	if language == search:
		print(f"Found {search}")
		count += 1
		continue
	print(f"not found {language}")

print(f"Thanks for searching, we found {search} {count} times")