import requests
from bs4 import BeautifulSoup
import os

def download_google_doc_as_html(doc_id):
    if os.path.exists("constitution.html"):
        with open("constitution.html", 'r') as f:
            return f.read()
    url = f"https://docs.google.com/feeds/download/documents/export/Export?id={doc_id}&exportFormat=html"
    response = requests.get(url)
    if response.status_code != 200:
        print("Failed to download the document.")
    with open("constitution.html", 'w+') as f:
        f.write(response.text)


def scrub_styles(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Remove the entire head tag
    if soup.head:
        soup.head.decompose()
    
    ## Remove all tags except for headers and paragraphs
    #for tag in soup.find_all():
    #    if tag.name not in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']:
    #        tag.decompose()  # Remove tag and its content
    #    else:
    #        tag.attrs = {}  # Remove attributes like style, class, etc.
    
    return str(soup)

def convert_to_html(doc_content):
    scrubbed_html = scrub_styles(doc_content)
    print(scrubbed_html)
    with open("org-structure-template.html", 'r') as f:
        template = f.read()
    with open('org-structure.html', 'w', encoding='utf-8') as file:
        file.write(template.replace("ORG_STRUCTURE", scrubbed_html))
    print("HTML document saved as cleaned-document.html")

if __name__ == '__main__':
    google_doc_id = '165qyAEnNhpsRHSHNbQh6Q5TFea9YgmJftDFAeXLMcOY'
    html_content = download_google_doc_as_html(google_doc_id)
    if html_content:
        convert_to_html(html_content)
