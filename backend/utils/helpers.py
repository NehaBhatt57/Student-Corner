# Utility helpers

import os
from config import settings

def ensure_upload_dir():
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)