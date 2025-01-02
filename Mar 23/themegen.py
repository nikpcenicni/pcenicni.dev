# import random

# def generate_themes(num_themes):
#     # Define the possible keys and tailwind colors to choose from
#     keys = ["background", "headline", "subHeadline", "button", "buttonText", "stroke", "main", "highlight", "secondary", "tertiary"]
#     colors = ["red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", "pink"]
    
#     # Generate the specified number of themes
#     themes = []
#     for i in range(num_themes):
#         theme = {}
#         for key in keys:
#             # Randomly select a color for each key
#             theme[key] = random.choice(colors) + "-" + str(random.randint(1, 9)*100)
#         themes.append(theme)
    
#     return themes


import random
import json

def generate_themes():
    colors = [
        'red', 'orange', 'yellow', 'green', 'teal',
        'blue', 'indigo', 'purple', 'pink', 'gray'
    ]

    themes = []

    for i in range(5):
        theme = {
            'background': f"bg-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'headline': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'subHeadline': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'button': f"bg-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'buttonText': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'stroke': f"border-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'main': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'highlight': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'secondary': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}",
            'tertiary': f"text-{random.choice(colors)}-{random.randint(1, 9)*100}"
        }

        themes.append(theme)

    return json.dumps(themes)


themes = generate_themes()
print(themes)


