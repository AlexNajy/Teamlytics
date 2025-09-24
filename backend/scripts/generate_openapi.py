import argparse
import json
import sys
from pathlib import Path
from backend.main import app


def main():

    default_out = Path(__file__).resolve().parents[2] / "teamlytics" / "openapi.yaml"

    parser = argparse.ArgumentParser(description="Export OpenAPI from a FastAPI application.")
    parser.add_argument("--out", default=default_out, help="Output path for the schema file")
    parser.add_argument("--format", choices=["json", "yaml"], default="yaml", help="Output format")
    parser.add_argument("--title", help="Override title")
    parser.add_argument("--version", help="Override version")
    parser.add_argument("--description", help="Override description")
    args = parser.parse_args()

    schema = app.openapi()

    if args.title:
        schema["info"]["title"] = args.title
    if args.version:
        schema["info"]["version"] = args.version
    if args.description:
        schema["info"]["description"] = args.description

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)

    fmt = args.format.lower()
    if fmt == "json":
        out_path.write_text(json.dumps(schema, indent=2), encoding="utf-8")
    else:
        try:
            import yaml  # PyYAML
        except ImportError:
            print("PyYAML is required for YAML output. Install with: pip install pyyaml", file=sys.stderr)
            sys.exit(1)
        out_path.write_text(yaml.safe_dump(schema, sort_keys=False), encoding="utf-8")

    print(f"Wrote {out_path}")

if __name__ == "__main__":
    main()
