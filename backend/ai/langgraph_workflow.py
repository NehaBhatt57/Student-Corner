# Simple placeholder for workflow
# Later i will expand with LangGraph nodes

def detect_intent(query):

    if "mcq" in query.lower():
        return "mcq"
    
    return "qa"