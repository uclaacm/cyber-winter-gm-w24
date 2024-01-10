FROM pwn.red/jail

COPY --from=debian@sha256:98d3b4b0cee264301eb1354e0b549323af2d0633e1c43375d0b25c01826b6790 / /srv
COPY escape-rop /srv/app/
COPY escape-rop.sh /srv/app/run
RUN chmod 755 /srv/app/escape-rop && chmod 755 /srv/app/run

ENV JAIL_TIME=60
ENV JAIL_ENV_FLAG="cyber{magikarp_jump_best_game_dont_@_me}"
