import pandas as pd

df = pd.read_csv('improv_location_list.csv', header=None)
locations = df[0].tolist()

print(str(locations).replace("'", '"'))