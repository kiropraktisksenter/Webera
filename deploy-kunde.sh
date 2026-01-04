#!/bin/bash
# Webera Kunde Deployment Script
# Kjør: bash deploy-kunde.sh

echo "🚀 Webera - Deploy ny kunde"
echo "================================"
echo ""

# Samle info
read -p "Kundenavn (f.eks 'olas-frisorsalong'): " KUNDE
read -p "Kunde epost: " EMAIL

echo ""
echo "📦 Kopierer template..."

# Kopier template
cp -r . "../$KUNDE"
cd "../$KUNDE"

# Fjern git history
rm -rf .git
git init

# Oppdater package.json
sed -i "s/holth-webdesign/$KUNDE/g" package.json

# First commit
git add .
git commit -m "Initial commit for $KUNDE"

echo ""
echo "✅ Prosjekt klart!"
echo ""
echo "📋 NESTE STEG:"
echo "1. Gå til: https://github.com/new"
echo "2. Repository name: $KUNDE"
echo "3. Velg Public"
echo "4. Klikk Create repository"
echo "5. Kjør disse kommandoene:"
echo ""
echo "   git remote add origin https://github.com/DIN-BRUKER/$KUNDE.git"
echo "   git push -u origin main"
echo ""
echo "6. Gå til: https://vercel.com/new"
echo "7. Klikk Import ved $KUNDE"
echo "8. Klikk Deploy"
echo ""
echo "📧 Kunde epost: $EMAIL"
echo ""
