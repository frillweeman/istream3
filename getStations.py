import os
import re
import json
import requests

print("scanning ports on http://m1.mixhits.com")

# run nmap on the MixHits server
results = os.popen("nmap -Pn -p 8000-8100 m1.mixhits.com").read()

# sample data
# results = """
# 8001/tcp open  vcom-tunnel
# 8002/tcp open  teradataordbms
# 8003/tcp open  mcreport
# 8004/tcp open  p2pevolvenet
# 8005/tcp open  mxi
# 8006/tcp open  mxi
# """

# extract ports from nmap results
matches = re.findall(r'\n(80\d{2})', results)

print("parsing station titles")

titlePattern = re.compile(r'Title[^b]+b>([^<]*)')

stations = []

# generate json
for port in matches:
    html = os.popen(
        f'curl -s -A "Mozilla/5.0" http://m1.mixhits.com:{port}').read()
    title = titlePattern.search(html).group(1)
    stations.append({"title": title, "port": port})

with open("stations.json", "w") as outfile:
    json.dump(stations, outfile)

print(
    f"Scan complete. {len(stations)} stations found. Results in stations.json.")
