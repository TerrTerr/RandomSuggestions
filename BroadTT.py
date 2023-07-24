import pandas as pd

df = pd.read_csv('broad_relationship_list.csv', header=None)
locations = df[0].tolist()

print(str(locations).replace("'", '"'))
